/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called
 */
class Beat {
	constructor(audioSrc) {
		this.audio = new Audio(audioSrc);
	}

	play = () => {
		this.audio.currentTime = 0;
		this.audio.play();
	};
}

/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
	constructor(color, keyCode) {
		this.color = color;
		this.keYCode = keyCode;
		this.element = document.getElementById(keyCode);
		this.setButtonColorInHTML();
		this.setATransitionEndListener();
	}

	/**
	 * set a listener to remove the styles
	 */
	setATransitionEndListener = () => {
		this.element.addEventListener('transitionend', () => {
			this.deselect();
		});
	};

	/**
	 * Set the button color based on color specified
	 */
	setButtonColorInHTML = () => {
		this.element.style.borderColor = this.color;
	};

	/**
	 * Select function to set the background color and boxShadow
	 */
	select = () => {
		this.element.style.background = this.color;
		this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
	};

	/**
	 * Deselect function to reset background color and boxShadow
	 */
	deselect = () => {
		this.element.style.background = 'transparent';
		this.element.style.boxShadow = 'none';
	};
}
