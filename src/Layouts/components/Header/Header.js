import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignIn,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import Styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { Message, Inbox, Upload } from '~/components/icons/icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import routes from '~/config/routes';

const cx = classNames.bind(Styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'tieng Viet',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },

                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tieng Viet',
                },
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: ' FeedBack and Help ',
        to: '/feedback',
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: ' View Profile ',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: '/coin',
        separate: true,
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: ' Setting ',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out ',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="TikTok" />
                </Link>

                {/* search */}
                <Search />
                {/* search */}

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <a className={cx('icn-upload')} href="/upload?lang=en">
                                <Upload />
                            </a>
                            <Tippy offset={[12, 8]} delay={(0, 200)} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <Message />
                                </button>
                            </Tippy>
                            <Tippy offset={[12, 8]} delay={(0, 200)} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <Inbox />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button to={routes.upload} text>
                                Upload
                            </Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Loggin
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                // fallback="https://tse1.mm.bing.net/th?id=OIP.OVpTgUcb_jvg9ky0qIHNKAHaHa&pid=Api&rs=1&c=1&qlt=95&w=109&h=109"
                                src="https://tse1.mm.bing.net/th?id=OIP.53QGnSCZRqblWK6koHVkyAHaE8&pid=Api&P=0"
                                // src=""
                                className={cx('user-avatar')}
                                alt="Quan"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
