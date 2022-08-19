import { options } from "../options";

export const OptionsModal = ({
	optionSelecthandler,
	setInputValue,
	setPlaceholderValue,
}) => {
	return (
		<div className="input-options">
			{options.map((option) => {
				return (
					<div
						className="option-item"
						key={option.id}
						onClick={() => {
							optionSelecthandler(option.heading);
							setPlaceholderValue(option.headingTitle);
							setInputValue("");
						}}
					>
						<div className="headings-section">
							<div className="heading-main">{option.heading}</div>
							<div>
								<div className="heading-title">{option.headingTitle}</div>
								<div className="heading-details">{option.headingDetails}</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
