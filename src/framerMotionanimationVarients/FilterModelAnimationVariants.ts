const MODAL_ANIMATION_VARIANT = {
	before: { top: '150%' },
	after: {
		top: '50%',
		transition: {
			delay: 0.1,
			ease: 'easeOut',
		},
	},
} as const;
export { MODAL_ANIMATION_VARIANT };
