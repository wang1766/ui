import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '@/api/model/baseModel';
import { TkProxyInfoInfo, TkProxyInfoListResp } from './model/tkProxyInfoModel';

enum Api {
  CreateTkProxyInfo = '/tklive-api/tk_proxy_info/create',
  UpdateTkProxyInfo = '/tklive-api/tk_proxy_info/update',
  GetTkProxyInfoList = '/tklive-api/tk_proxy_info/list',
  DeleteTkProxyInfo = '/tklive-api/tk_proxy_info/delete',
  GetTkProxyInfoById = '/tklive-api/tk_proxy_info',
}

/**
 * @description: Get tk proxy info list
 */

export const getTkProxyInfoList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkProxyInfoListResp>>(
    { url: Api.GetTkProxyInfoList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new tk proxy info
 */
export const createTkProxyInfo = (params: TkProxyInfoInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateTkProxyInfo, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the tk proxy info
 */
export const updateTkProxyInfo = (params: TkProxyInfoInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateTkProxyInfo, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete tk proxy infos
 */
export const deleteTkProxyInfo = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteTkProxyInfo, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get tk proxy info By ID
 */
export const getTkProxyInfoById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkProxyInfoInfo>>(
    { url: Api.GetTkProxyInfoById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
