const Header: React.FC = (props) => (
  <header>
    <h1>
      В Староуткинске
      <br />
      <span className="subtitle">{props.children}</span>
    </h1>

    <style jsx>{`
      .subtitle {
        text-transform: uppercase;
      }
    `}</style>
  </header>
);

export default Header;
