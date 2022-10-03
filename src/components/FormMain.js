import { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { IMaskInput } from "react-imask";
import moment from "moment";

export default function FormMain () {
	const openPage = () => {
		const secondPage = window.open("http://learningphp:81/test.php");
		secondPage.addEventListener("load", () => {
			secondPage.console.log("hi");
		});
	}
	const [time, setTime] = useState("");
	const [isTimeError, setTimeError] = useState(false);
	const momentFormat = 'HH:mm';
	useEffect(() => (time.includes("_")) ? setTimeError(true) : setTimeError(false));
	return (
		<Form>
			<Form.Field>
				<label>First Name</label>
				<input placeholder="First Name"/>
			</Form.Field>
			<Form.Field>
				<label>Last Name</label>
				<input placeholder="Last Name"/>
			</Form.Field>
			<Form.Field>
				<Checkbox label="I agree to the Terms and Conditions"/>
			</Form.Field>
			<Form.Field error={isTimeError}>
				<label>Date</label>
				<IMaskInput
					mask={Date}
					pattern={momentFormat}
					format={(date) => moment(date).format(momentFormat)}
					parse={(str) => moment(str, momentFormat)}
					lazy={false}
					blocks={{
						HH: {
							mask: IMask.MaskedRange, from: 0, to: 23
						}, mm: {
							mask: IMask.MaskedRange, from: 0, to: 59
						}
					}}
					onInput={(e) => setTime(e.target.value)}
				/>
			</Form.Field>
			<Form.Field>Current Time Value: {time}</Form.Field>
			<Button onClick={openPage}>Submit</Button>
		</Form>
	);
}
