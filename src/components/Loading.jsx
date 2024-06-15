import "../styles/loading.css";

export default function Loading(props) {
  return (
    <div className="loading_container container d-flex justify-content-center align-items-center">
      <div className="loading_style col-11 text-center fw-bold rounded">
        <p className="m-0 p-2 fw-normal fs-5">Loading {props.thingLoading}</p>
      </div>
    </div>
  );
}
