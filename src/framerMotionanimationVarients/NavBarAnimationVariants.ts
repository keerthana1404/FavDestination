const WEB_TEXT_FIELD_VARIATIONS = {
	open: { width: ['20%', '90%'] },
	close: { width: ['90%', '50%'] },
} as const;

const MOBILE_TEXT_FIELD_VARIATIONS = {
	open: { y: 0, opacity: 1 },
	close: { y: '-100px', opacity: 0 },
} as const;

const MOBILE_LINK_ANIMATE_VARIATIONS = {
	open: { y: 0 },
	close: { y: -25 },
} as const;

export {
	WEB_TEXT_FIELD_VARIATIONS,
	MOBILE_TEXT_FIELD_VARIATIONS,
	MOBILE_LINK_ANIMATE_VARIATIONS,
};
