const EmailForm = ({ handleSubmit, email, setEmail }) => (
  <form onSubmit={handleSubmit} className="mt-3">
    <div className="form-group mb-3">
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <button disabled={!email} className="btn btn-primary">
      Submit
    </button>
  </form>
);

export default EmailForm;
