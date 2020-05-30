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
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
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
