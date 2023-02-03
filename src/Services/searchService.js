import * as httprequest from '~/utils/httprequest';

export const searchService = async (q, type = 'less') => {
    try {
        const res = await httprequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.los('error');
    }
    searchService();
};
