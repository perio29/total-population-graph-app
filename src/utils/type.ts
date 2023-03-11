export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PopulationData = {
  year: number;
  value: number;
};

export type Prefectures = {
  message: null;
  result: Prefecture[];
};

export type PrefPopulation = {
  name: string;
  data: PopulationData[];
};

export type Data = {
  label: string;
  data: PopulationData[];
};

export type ResultData = Data[];

export type ResponseResult = {
  boundaryYear: number;
  data: ResultData;
};

export type PrefPopulationResponse = {
  message: null;
  result: ResponseResult;
};

export type Datasets = {
  label: string;
  data: number[];
};
