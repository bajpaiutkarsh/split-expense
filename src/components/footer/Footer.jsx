import styles from "./Footer.module.css";
import FooterButton from "./FooterButton";
const Footer = () => {
  return (
    <>
      <footer>
        <ul>
          <li>
            <FooterButton name="Expenses" icon="monitoring" path="/" />
          </li>
          <li>
            <FooterButton name="Group" icon="group" path="/group" />
          </li>
          <li>
            <FooterButton name="Friends" icon="person" path="/friends" />
          </li>
          <li>
            <FooterButton
              name="Activity"
              icon="bid_landscape"
              path="/activity"
            />
          </li>
          <li>
            <FooterButton
              path="/account"
              name="Account"
              img="https://img.freepik.com/free-vector/organic-flat-abstract-element-pattern_23-2148950504.jpg?w=900&t=st=1708412316~exp=1708412916~hmac=67c1a5044b9d1fca87638aa46f286df3bfd08ec0d596374c549cefe269b0f9fa"
            />
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
