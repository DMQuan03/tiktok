import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function ACcountItem({ data }) {
    return (
        <Link to={`/@/${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                // src="http://i.9mobi.vn/cf/images/2015/04/nkk/hinh-avatar-dep-11.jpg"
                src={data.avatar}
                alt={data.full_name}
                // fallback="https://tse1.mm.bing.net/th?id=OIP.OVpTgUcb_jvg9ky0qIHNKAHaHa&pid=Api&rs=1&c=1&qlt=95&w=109&h=109"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

ACcountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ACcountItem;
