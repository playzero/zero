extern crate rand;

use std::io;
use rand::Rng;
use std::cmp::Ordering;

fn main() {

	let tup: ( i32, f64, u8, bool ) = ( 500, 6.4, 1, true );
	println!("{:#?}", tup);

	let truth: bool = tup.3;
	println!("{}", truth);
	println!("{}", 500_000_123);

	let months = [
		"January", "February", "March",
		"April", "May", "June",
		"July", "August", "September",
		"October", "November", "December"
	];

	let index = 3;
	println!("{}",months[index]);

	println!("Hello!");
	println!("Can you guess the number?");

	let secret = rand::thread_rng().gen_range(1,101);
	// println!("the secret number is {}", secret);

	loop {

		let mut guess = String::new();
		io::stdin().read_line(&mut guess)
			.expect("Failed to read line");

		let guess:u32 = match guess.trim().parse() {
			Ok(num) => num,
			Err(_) => continue,
		};

		println!("You guessed {}", guess);

		match guess.cmp(&secret) {

			Ordering::Less => println!("Too small"),
			Ordering::Greater => println!("Too big!"),
			Ordering::Equal => {
				ext(secret.to_string());
				println!("You win!");
				break;
			}
		}

	}

}

fn ext ( name: String) {
	println!("{} is correct.", name);
}
