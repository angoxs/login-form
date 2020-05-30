import Head from "next/head";
import Layout from "../components/Layout";

export default function Home({ isVisible }) {
  return (
    <Layout home>
      <form action="" className="form-container">
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
        <button type="submit">Log in </button>
        <p>
          Don't have an account? <span>Sign up</span>
        </p>
      </form>
    </Layout>
  );
}
