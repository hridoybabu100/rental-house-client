import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MOONGO_DB_DATA_BASE);
const db = client.db(process.env.MOONGO_DB_NAME);

import dns from "node:dns/promises";
import { jwt } from "better-auth/plugins";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),

    //...other options
  emailAndPassword: { 
    enabled: true, 
  }, 

   user: {
       additionalFields: {
          role: {
             defaultValue : "user"
            },
            isBlocked: {
                defaultValue : false
            },
               isPremium: {
        defaultValue: false,
      },
        }
    },


     socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLOUD_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_SECRET_ID,
        }, 
    },

    // json web tokeen

      session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      maxAge: 60 * 24 * 60,
    },
  },
  plugins: [jwt()],
});