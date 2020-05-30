import Head from "next/head";
import Layout from "../components/Layout";

import { motion } from "framer-motion";

export default function Home({ isVisible }) {
  return (
    <Layout home>
      <motion.form
        action=""
        className="form-container"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["8%", "8%", "20%", "8%", "8%"],
        }}
      >
        <content>
          <img
            src="https://cl.ly/268df971f468/download/Group%2525203.png"
            width="18px"
          />
          <p>Code Nuggets</p>
        </content>
        <h1 className="form-title">Log in</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <p>
          Forgot <span>Password?</span>
        </p>
        <motion.button type="submit">Log in </motion.button>
        <p>
          Don't have an account? <span>Sign up</span>
        </p>
      </motion.form>
    </Layout>
  );
}
