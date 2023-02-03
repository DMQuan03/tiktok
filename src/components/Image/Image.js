import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/assets/images/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ className, src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            ref={ref}
            className={classNames(styles.Wrapper, className)}
            {...props}
            alt={alt}
            src={fallback || src}
            onError={handleError}
        ></img>
    );
});

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
