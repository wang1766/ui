import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '@/api/model/baseModel';
import { TkWatchTaskInfo, TkWatchTaskListResp } from './model/tkWatchTaskModel';

enum Api {
  CreateTkWatchTask = '/tklive-api/tk_watch_task/create',
  UpdateTkWatchTask = '/tklive-api/tk_watch_task/update',
  GetTkWatchTaskList = '/tklive-api/tk_watch_task/list',
  DeleteTkWatchTask = '/tklive-api/tk_watch_task/delete',
  GetTkWatchTaskById = '/tklive-api/tk_watch_task',
}

/**
 * @description: Get tk watch task list
 */

export const getTkWatchTaskList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkWatchTaskListResp>>(
    { url: Api.GetTkWatchTaskList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new tk watch task
 */
export const createTkWatchTask = (params: TkWatchTaskInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateTkWatchTask, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the tk watch task
 */
export const updateTkWatchTask = (params: TkWatchTaskInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateTkWatchTask, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete tk watch tasks
 */
export const deleteTkWatchTask = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteTkWatchTask, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get tk watch task By ID
 */
export const getTkWatchTaskById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TkWatchTaskInfo>>(
    { url: Api.GetTkWatchTaskById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
