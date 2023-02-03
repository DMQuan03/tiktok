import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGBGFfxCeXlhoMJM0jr3MrookY3SBXqyphyw&usqp=CAU"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary small>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>duongminhquan</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Dương Minh Quân</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('lable')}>Follow</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('lable')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
