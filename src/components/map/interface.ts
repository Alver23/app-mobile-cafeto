export interface Props {
  mapId: string;
  centerCoordinate: number[];
  data: {
    type: string;
    features: {
      type: string;
      [key: string]: any;
      properties: {
        icon: string;
        [key: string]: any;
      };
      geometry: {
        type: string;
        coordinates: number[];
      };
    }[];
  };
}
