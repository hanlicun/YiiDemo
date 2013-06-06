<?php

return array(
	'language' => 'zh_cn',
	'basePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'..',
	'name'=>'Minisite DHL ',
         'defaultController'=>'index',
         'timeZone'=>'Asia/Shanghai',


	// autoloading model and component classes
	'import'=>array(
		'application.models.*',
		'application.components.*',
                'application.extensions.*',
	),

	'modules'=>array(		
		// uncomment the following to enable the Gii tool		
		'gii'=>array(
			'class'=>'system.gii.GiiModule',
			'password'=>'5544',
		 	// If removed, Gii defaults to localhost only. Edit carefully to taste.
			'ipFilters'=>array('220.181.74.170','127.0.0.1','::1'),
		),
		
	),

	// application components
	'components'=>array(
		'user'=>array(
			// enable cookie-based authentication
			'allowAutoLogin'=>true,
                        'loginUrl'=>array('sysadmin/login'),
		),

                'memcache' => array(    
                                   'class' => 'system.caching.CMemCache', 
                                   'servers' => array( array('host' => '127.0.0.1', 'port' => 11211)),  //172.16.111.21
                                   'hashKey' =>true, 
								   	'keyPrefix'=> 'Dhl_',
                                   'serializer' => false
                  ),		
	
              'urlManager'=>array(
													'urlFormat'=>'get',
													'rules'=>array(
														'<controller:\w+>/<id:\d+>'=>'<controller>/view',
														'<controller:\w+>/<action:\w+>/<id:\d+>'=>'<controller>/<action>',
														'<controller:\w+>/<action:\w+>'=>'<controller>/<action>',
													),
												//	'showScriptName'=>false,
			),
         
              


		//For Mysql
		'db'=>array(
					'class'=>'CDbConnection',
					'connectionString'=>'mysql:host=localhost;dbname=2013_bj;',
					'username'=>'root',
					'password'=>'1234',
					'tablePrefix' => 'mini_', 
					'charset' => 'utf8',	
                     'enableProfiling'=>true,
                     // 'enableParamLogging'=>true,
				    'emulatePrepare'=>true
				),
	
			'log' => array(
                            'class' => 'CLogRouter',
                            'routes' => array(
                                array(
                                    'class' => 'CFileLogRoute',
                                    'levels' => 'trace, info, error, warning',
                                ),
                                array(
                                    'class' => 'CWebLogRoute',
                                    'levels' => 'trace', //����Ϊtrace
                                    'categories' => 'system.db.*' //ֻ��ʾ������ݿ���Ϣ,������ݿ�����,��ݿ�ִ�����
                                ),
                            ),
                        ),
		'errorHandler'=>array(
			// use 'site/error' action to display errors
                            'errorAction'=>'index.php/index/error',
                    ),
		'log'=>array(
			'class'=>'CLogRouter',
			'routes'=>array(
				array(
							'class'=>'CFileLogRoute',
							'levels'=>'error, warning',
				),
				
			),
		),
	),

	// application-level parameters that can be accessed
	// using Yii::app()->params['paramName']
	'params'=>array(
		// this is used in contact page
		'adminEmail'=>'282552154@qq.com',
	),
	//'theme' =>'new',
	
	
);
