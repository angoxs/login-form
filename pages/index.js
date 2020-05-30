import Head from "next/head";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Home({ isVisible }) {
  return (
    <Layout home>
      <div>
        <motion.form
          action=""
          className="form-container"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["10%", "10%", "20%", "20%", "10%"],
          }}
        >
          <h1 className="form-title">Log in</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <p>
            Forgot <span>Password?</span>
          </p>
          <button type="submit">Log in </button>
          <p>
            Don't have an account? <span>Sign up</span>
          </p>
        </motion.form>
      </div>
    </Layout>
  );
}
