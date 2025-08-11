class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        // returning a masked version for security
        return `${this._password} (encrypted)`;
    }

    set password(value) {
        // simple validation before setting
        if (value.length < 6) {
            console.log("Password must be at least 6 characters");
            return;
        }
        this._password = value;
    }
}

const user1 = new User("test@example.com", "123456");
console.log(user1.password); // getter
user1.password = "abc"; // setter (too short)
user1.password = "newPassword123"; // setter (accepted)
console.log(user1.password);
