interface IRequest {
  sum: number;
  from: number;
  to: number;
}

enum answerStatus {
  Success = 'success',
  Failed = 'failed',
}

interface successfullAnswer extends IRequest {
  databaseId: number;
}

interface failedAnswer {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess {
  status: answerStatus.Success;
  data: successfullAnswer;
}

interface IResponseFailed {
  status: answerStatus.Failed;
  data: failedAnswer;
}
