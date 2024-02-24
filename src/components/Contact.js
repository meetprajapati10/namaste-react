const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl p-4 m-4 ">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-black m-2 p-1"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black m-2 p-1"
          placeholder="message"
        />
        <button className="border border-black m-2 p-1 bg-gray-200 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
