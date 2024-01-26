/**
 * Helper function to create a header element
 * @param size
 * @param text
 * @param className
 * @returns {HTMLAnchorElement | HTMLElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLObjectElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSlotElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement}
 */
export const createHeader = (size, text, className) => {
	const header = document.createElement(size);
	header.textContent = text;
	header.className = className;
	return header;
};

/**
 * Helper function to create a paragraph element
 * @param text
 * @param className
 * @returns {HTMLParagraphElement}
 */
export const createText = (text, className) => {
	const paragraph = document.createElement('p');
	paragraph.textContent = text;
	paragraph.className = className;
	return paragraph;
};

/**
 * Helper function to create a link element
 * @returns {*[]}
 */
export const getTypographyClasses = () => {
	const baseClasses = ['neo-header', 'neo-text'];
	const suffixes = [
		'thin',
		'light',
		'extra-light',
		'medium',
		'semi-bold',
		'bold',
		'extra-bold',
		'black',
	];
	const italicSuffixes = ['italic'];

	let classes = [];

	baseClasses.forEach((base) => {
		// Add non-italic classes
		suffixes.forEach((suffix) => {
			classes.push(`${base}--${suffix}`);
		});

		// Add italic classes for 'neo-text' only
		if (base === 'neo-text') {
			suffixes.forEach((suffix) => {
				italicSuffixes.forEach((italic) => {
					classes.push(`${base}--${suffix}-${italic}`);
				});
			});
			// Add regular italic
			classes.push(`${base}--${italicSuffixes[0]}`);
		}
	});

	return classes;
};
