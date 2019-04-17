/**********************************************************************
*
* plugin_msg.h
*
* Public Type Definition
*
* Copyright 2018-2028 HuaWei, Inc. 
*
**********************************************************************/

#ifndef _PLUGIN_MSG_H_
#define _PLUGIN_MSG_H_


/*
*  Exit code delimiters
*/
#define PLUGIN_STATUS_SUCCESS                   0
#define PLUGIN_STATUS_FAILED                    1


#define MAX_INPUT_LENGTH  127
#define MAX_APP_PATH      255
#define MAX_OUTPUT_LENGTH  127

/*
*  ��������ö��
*/
typedef enum {
	CONF_MEDIATYPE_FLAG_VIDEO_DATA = 19, //��Ƶ+����
} CONF_MEDIATYPE;

/**!
* \brief
*   �첽����API��Ϣ�ص�
*
* @param
*   ret     ���ؽ��
*   data    ���ر���
*
* @return
*   void
*/
typedef void(*plugin_call_back)(int	ret, void* data);

/**!
* \brief
*   notify֪ͨ�ص�
*
* @param
*   notify     ֪ͨID
*   data       ֪ͨ����
*
* @return
*   void
*/
typedef void(*plugin_notify_func)(int notify, void* data);

/**!
* \brief
*   ��ʼ���ӿڲ����ṹ��
*/
struct plugin_init_param
{
	plugin_call_back callbackFunc;    /// �첽���ûص�����

	char path[MAX_APP_PATH + 1];      /// ���пͻ���Ŀ¼��·��
	plugin_notify_func notifyFunc;    /// ֪ͨ����
};

/**!
* \brief
*   ��¼�ӿڲ����ṹ��
*/
struct plugin_login_param
{
	plugin_call_back callbackFunc;              /// �첽���ûص�����

	UINT32 serverPort;                          /// ��¼�������˿�
	char serverAddress[MAX_INPUT_LENGTH + 1];   /// ��¼��������ַ
	char account[MAX_INPUT_LENGTH + 1];         /// ��¼�������˺�
	char password[MAX_INPUT_LENGTH + 1];        /// ��¼����������
};

/**!
* \brief
*   ������ʱ��������ṹ��
*/
struct plugin_create_meeting_param
{
	plugin_call_back callbackFunc;              /// �첽���ûص�����

	char meetingSubject[MAX_INPUT_LENGTH + 1];  /// ��������
	UINT32 meetingType;                         /// ��������
	UINT32 needPassword;                        /// �����Ƿ���Ҫ����
};

/**!
* \brief
*   ����ID�������ṹ��
*/
struct plugin_join_meeting_by_id_param
{
	plugin_call_back callbackFunc;           /// �첽���ûص�����

	char meetingID[MAX_INPUT_LENGTH + 1];
	char password[MAX_INPUT_LENGTH + 1];
};

/**!
* \brief
*   ͨ�ýӿڲ����ṹ��
*/
struct plugin_common_param
{
	plugin_call_back callbackFunc;  /// �첽���ûص�����
};

#endif /* _PLUGIN_MSG_H_ */
