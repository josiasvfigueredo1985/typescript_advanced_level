// Optionals
// Default value
function sendEmail(
  to: string,
  message: string,
  // subject: string = 'No Subject', // Optionals must be the last parameter in a function
  subject: string = 'No Subject'
): void {
  const email = {
    Title: 'New Email',
    To: to,
    Subject: subject,
    Message: message,
  }
  console.log(email)
}
sendEmail('john_123@gmail.com', 'Hello John!')
sendEmail('john_123@gmail.com', 'Hello John!', 'Greetings')

// Optionals without default value
function sendCompleteEmail(
  to: string,
  message: string,
  subject: string,
  // from?: string = 'Kim', // Parameter cannot have question mark and initializer.
  from?: string
): void {
  const email = {
    Title: 'New Email',
    From: from,
    To: to,
    Subject: subject,
    Message: message,
  }
  console.log(email)
}
sendCompleteEmail('john_123@gmail.com', 'Hello John!', 'Greetings')
sendCompleteEmail('john_123@gmail.com', 'Hello John!', 'Greetings', 'Jim Doe')

function sendCompleteEmailUndefinedValues(
  to: string,
  message: string,
  subject?: string,
  from?: string
): void {
  const email = {
    Title: 'New Email',
    From: from,
    To: to,
    Subject: subject,
    Message: message,
  }
  console.log(email)
}
// It's possible to inform the arguments as usual...
sendCompleteEmailUndefinedValues(
  'john_123@gmail.com',
  'Hello John!',
  'Greetings'
)
// And also when 2 parameters are optional it's possible to inform the third parameter as undefined
sendCompleteEmailUndefinedValues(
  'john_123@gmail.com',
  'Hello John!',
  undefined,
  'Jim Doe'
)
