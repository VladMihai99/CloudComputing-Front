import React from 'react';
import Header from './Header';
import MessagesList from './MessagesList';
import MessagesSubmit from './MessagesSubmit';

function MainPage(props) {
    return ( 
        <div id="MainPage">
            <Header title={'Translation App'}/>
            <h1 className='mt-10 text-blue-600 text-3xl font-bold'>Main Page</h1>
            <div className='flex max-w-8xl m-auto px-16 py-28'>
                <div className='w-1/2 pl-10'>
                    <MessagesList/>
                </div>
                <div className='w-1/2 pr -10'>
                    <MessagesSubmit/>
                </div>
            </div>
        </div>
    );
}

export default MainPage;