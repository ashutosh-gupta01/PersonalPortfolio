function Form() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    formData.access_key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY; 

    const json = JSON.stringify(formData);
    console.log("Form Data Sent:", json);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();
      console.log("API Response:", result);

      if (result.success) {
        alert("Message sent successfully!");
      } else if (result.errors) {
        console.error("Validation Errors:", result.errors);
        alert("Validation errors occurred. Please check your input.");
      } else {
        alert("Message failed to send. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full lg:max-w-[45%]">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="w-full py-4 px-4 mb-4 rounded-lg bg-[#112233] text-white text-lg border-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          className="w-full py-4 px-4 mb-4 rounded-lg bg-[#112233] text-white text-lg border-none"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Enter Your Subject"
          className="w-full py-4 px-4 mb-4 rounded-lg bg-[#112233] text-white text-lg border-none"
          required
        />
        <textarea
          name="message"
          placeholder="Enter Your Message"
          className="w-full py-4 px-4 mb-4 rounded-lg bg-[#112233] text-white text-lg border-none resize-none h-40"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full py-4 bg-[#00f0ff] text-white rounded-lg text-lg font-semibold cursor-pointer hover:bg-[#00cce7] transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
