// @flow
import React from 'react';
import BookmarkItem from './BookmarkItem';

type Props = {
    bookmarks: Array<String>
};

const BookmarksList = (props: Props) => (
    <React.Fragment>
        <BookmarkItem/>
        <BookmarkItem/>
        <BookmarkItem/>
        <BookmarkItem/>
    </React.Fragment>
);

export default BookmarksList;
