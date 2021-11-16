const BodyContainer: React.FC = (props) => (
  <>
    <div className="container">{props.children}</div>

    <style jsx>{`
      .container {
        max-width: 720px;
        margin: 0 auto;
        padding: 0 2rem;

        @media screen and (max-width: 480px) {
          padding: 0 1rem;
        }
      }
    `}</style>
  </>
);

export default BodyContainer;
