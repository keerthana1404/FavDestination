interface userLoginForm {
	email: string;
	password: string;
}

interface userRegistrationForm {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
}

interface resetPasswordForm {
	password: string;
	confirmPassword: string;
}

export { userLoginForm, userRegistrationForm, resetPasswordForm };
