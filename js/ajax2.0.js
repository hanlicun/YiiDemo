//recvType ������ֵHTML �� XML , Ĭ��ΪHTML
function Ajax(recvType) {
	var aj = new Object();
	aj.targetUrl = '';    //����ĵ�ַ ������PHPҲ����XML�ļ�
	aj.sendString = '';   //������������ݵ��ַ���  �� & ��ʽ url 
	aj.recvType = recvType ? recvType : 'HTML';//HTML XML
	aj.resultHandle = null;

	aj.createXMLHttpRequest = function() {
		var request = false;
		if(window.XMLHttpRequest) {
			request = new XMLHttpRequest();
			if(request.overrideMimeType) {
				request.overrideMimeType('text/xml');
			}
		} else if(window.ActiveXObject) {
			var versions = ['Microsoft.XMLHTTP', 'MSXML.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.7.0', 'Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];
			for(var i=0; i<versions.length; i++) {
				try {
					request = new ActiveXObject(versions[i]);
					if(request) {
						return request;
					}
				} catch(e) {
					request=false;
				}
			}
		}
		return request;
	}

	aj.XMLHttpRequest = aj.createXMLHttpRequest();

	aj.processHandle = function() {
		if(aj.XMLHttpRequest.readyState == 4) {
			if(aj.XMLHttpRequest.status == 200) {
				if(aj.recvType == 'HTML') {
					aj.resultHandle(aj.XMLHttpRequest.responseText);
				} else if(aj.recvType == 'XML') {
					aj.resultHandle(aj.XMLHttpRequest.responseXML);
				}
			}
		}
	}

	aj.get = function(targetUrl, resultHandle) {
		aj.targetUrl = targetUrl;
		if(resultHandle!=null){
			aj.XMLHttpRequest.onreadystatechange = aj.processHandle;
			aj.resultHandle = resultHandle;
		}
		if(window.XMLHttpRequest) {
			aj.XMLHttpRequest.open('GET', aj.targetUrl);
			aj.XMLHttpRequest.send(null);
		} else {
	        aj.XMLHttpRequest.open("GET", targetUrl, true);
	        aj.XMLHttpRequest.send();
		}
	}

	aj.post = function(targetUrl, sendString, resultHandle) {
		aj.targetUrl = targetUrl;
		aj.sendString = sendString;
		if(resultHandle!=null){
			aj.XMLHttpRequest.onreadystatechange = aj.processHandle;
			aj.resultHandle = resultHandle;
		}
		aj.XMLHttpRequest.open('POST', targetUrl);
		aj.XMLHttpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		aj.XMLHttpRequest.send(aj.sendString);
	}
	return aj;
}
