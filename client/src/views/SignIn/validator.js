export const signInSchema = {
    email: {
        presence: { allowEmpty: false, message: 'is required'},
        email: true,
        length: { maximum: 64 }
    },
    password: {
        presence: { allowEmpty: false, message: 'is required'},
        length: { maximum: 64 }
    }
}