export const tokens = {
    colors: {
        brand: {
            coconutMilk: '#F5EFE8',
            orange: '#FF6A00',
            blue: '#1571D3',
        },
        neutral: {
            black: '#000000',
            white: '#FFFFFF',
        },
        functional: {
            background: '#F5EFE8',
            text: '#000000',
            accent: '#FF6A00',
            secondary: '#1571D3',
        },
    },
    typography: {
        families: {
            headers: "'Host Grotesk', sans-serif",
            body: "'Inter', sans-serif",
        },
        sizes: {
            base: '16px',
            h1: '4rem',
            h2: '3rem',
            h3: '2.25rem',
            h4: '1.75rem',
            p: '1.125rem',
            small: '0.875rem',
        },
        weights: {
            light: 300,
            regular: 400,
            semibold: 600,
            bold: 700,
            black: 900,
        },
    },
    effects: {
        glassmorphism: {
            standard: {
                background: 'rgba(245, 239, 232, 0.4)',
                blur: '12px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                shadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            },
            heavy: {
                background: 'rgba(245, 239, 232, 0.7)',
                blur: '20px',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                shadow: '0 12px 40px 0 rgba(0, 0, 0, 0.1)',
            },
        },
        shadows: {
            soft: '0 4px 12px rgba(0,0,0,0.05)',
            medium: '0 8px 24px rgba(0,0,0,0.1)',
            hard: '0 12px 36px rgba(0,0,0,0.15)',
        },
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '2rem',
        xl: '4rem',
        xxl: '8rem',
    },
    radius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
    },
} as const;

export type DesignTokens = typeof tokens;
