import NextAuth from 'next-auth';
import { authConfig } from '../auth.config';
import Credentials from 'next-auth/providers/credentials';
import { employes } from './data';
import Employe from './models/Employe';
import authFormSchema from './app/schemas/authFormSchema';
import { md5 } from 'js-md5';
import { neon } from '@neondatabase/serverless';

function getEmploye(employeCode: string, password: string): Employe | null {
  return employes.collection.find(employe => employe.userCode === employeCode && employe.password === md5(password)) || null;
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = authFormSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password, otpKey } = parsedCredentials.data;
          const employe = getEmploye(username, password);

          if (!employe) {
            return null;
          }

          const sql = neon(`${process.env.NEON_DATABASE_URL}`);

          try {
            const validatedEmail = await sql`SELECT email
            FROM otp
            WHERE email=${employe.email} AND key=${otpKey};`;

            if (validatedEmail[0]) {
              return employe
            }
          }
          catch {
            return null;
          }
        }

        return null;
      },
    }),
  ],
});