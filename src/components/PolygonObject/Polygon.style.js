export const triangleStyle = (top, right, rotate) => ({
    position: 'absolute',
    width: 0,
    height: 0,
    transform: `rotate(${rotate})`,
    border: '100px solid transparent',
    borderBottom: '100px solid transparent',
    borderLeft: '100px solid #FFFFFF',
    opacity: '0.1',
    top: `${top}`,
    right: `${right}`,
});

export const squareStyle = (top, right, rotate) => ({
    position: 'absolute',
    width: '100px',
    height: '100px',
    background: '#FFFFFF',
    opacity: '0.1',
    transform: `rotate(${rotate})`,
    top: `${top}`,
    right: `${right}`,
});

export const circleStyle = (top, right, rotate) => ({
    position: 'absolute',
    width: '100px',
    height: '100px',
    background: '#FFFFFF',
    opacity: '0.1',
    borderRadius: '50%',
    top: `${top}`,
    right: `${right}`,
});