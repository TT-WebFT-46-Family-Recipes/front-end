import * as yup from "yup";

export default yup.object().shape({
	username: yup
		.string()
		.required("username is required")
		.min(5, "username must be 6 characters long"),
	password: yup
		.string()
		.required("password is required")
		.min(6, "password must be 8 characters long"),
});
