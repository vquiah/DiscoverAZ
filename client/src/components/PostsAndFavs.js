import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MyPosts from './MyPosts'
import MyFavs from '../components/MyFavs'

const PostsAndFavs = () => {
    return (
        <div className="tab">
          <Tabs className="Tabs">
            <TabList>
              <Tab>My Posts</Tab>
              <Tab>My Favorites</Tab>
            </TabList>
            <TabPanel>
              <MyPosts />
            </TabPanel>
            <TabPanel>
              <MyFavs />
            </TabPanel>
          </Tabs>
        </div>
      );
}

export default PostsAndFavs
