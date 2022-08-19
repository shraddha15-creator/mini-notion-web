import { useState } from "react";
import { OptionsModal } from "./components/OptionsModal";
import "./App.css";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [isSelected, setIsSelected] = useState("");
	const [placeholderValue, setPlaceholderValue] = useState(
		"Type '/' for commands"
	);

	const optionSelecthandler = (heading) => {
		setIsSelected(heading);
	};

	return (
		<div className="App">
			<p>Mini Notion</p>
			<input
				className={`input-field ${isSelected}`}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder={placeholderValue}
			/>
			{inputValue === "/" && (
				<OptionsModal
					optionSelecthandler={optionSelecthandler}
					setInputValue={setInputValue}
					setPlaceholderValue={setPlaceholderValue}
				/>
			)}
		</div>
	);
}

export default App;
