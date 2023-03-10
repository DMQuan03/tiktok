import PropTypes from 'prop-types';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

const renderPreview = (props) => {
    return (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );
};

function AccountItem({ bottom }) {
    return (
        <div>
            <Tippy offset={[0, 4]} interactive render={renderPreview} placement={bottom} delay={[800, 0]}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="data:image/jpeg;base64,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"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Duongminhquan</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Duong Minh Quan</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
