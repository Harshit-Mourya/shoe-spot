export default function NotFound() {
  return (
    <>
      <div className="container p-5 mt-5 mb-5">
        <div className="row text-center">
          <h1 className="text-danger">404</h1>
          <h2 className="fs-4">Page not found!</h2>
          <p className=" m-2 text-muted " style={{ fontWeight: "500" }}>
            Sorry the page you are looking for does not exist.
          </p>
        </div>
      </div>
    </>
  );
}
