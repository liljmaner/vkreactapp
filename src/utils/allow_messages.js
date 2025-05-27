import vkBridge from '@vkontakte/vk-bridge';
import axios from 'axios'

export const Allow_Messages = () => 
{

    vkBridge.send('VKWebAppAllowMessagesFromGroup', {
        group_id: 230259684,
        key: 'some_keyidk' 
        })
        .then((data) => { 
          if (data.result) {
            vkBridge.send('VKWebAppGetLaunchParams')
            .then((params_data) => 
            {
               vkBridge.send('VKWebAppGetUserInfo', {
                    user_id: params_data['vk_user_id']
                })
                .then((user_data) => { 
                console.log("user_data:",user_data.vk_user_id);
                axios.post("http://localhost:4000/vkbot/users/insert_newsletter",{
                    sign: params_data['sign'],
                    vk_access_token_settings: params_data['vk_access_token_settings'],
                    vk_app_id: params_data['vk_app_id'],
                    vk_are_notifications_enabled: params_data['vk_are_notifications_enabled'],
                    vk_is_app_user: params_data['vk_is_app_user'],
                    vk_is_favorite: params_data['vk_is_favorite'],
                    vk_language: params_data['vk_language'],
                    vk_platform: params_data['vk_platform'],
                    vk_ref: params_data['vk_ref'],
                    vk_ts: params_data['vk_ts'],
                    vk_user_id: params_data['vk_user_id'],
                    photo: user_data['photo_100'],
                    name: `${user_data.first_name}   ${user_data.last_name}`
                },
                {
                    headers: {
                          'Content-Type': 'application/json'
                    }
                })
                .then((callback) => console.log(callback))
                .catch((err) => console.log(err))
                })
            })
         }
        })
        .catch((error) => {
          console.log(error);
        });
}