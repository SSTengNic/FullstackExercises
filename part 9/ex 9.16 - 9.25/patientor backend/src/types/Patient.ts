// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis['code']>;
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

export interface SickLeave {
  startDate: string;
  endDate: string;
}

export interface Discharge {
  date: string,
  criteria: string
}

interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave?: SickLeave;
}

interface HospitalEntry extends BaseEntry {
  type: "Hospital";
  discharge?: Discharge;

}

export type Entry =
| HospitalEntry
| OccupationalHealthcareEntry
| HealthCheckEntry;

export type newEntry =
| Omit< HospitalEntry, "id">
| Omit <OccupationalHealthcareEntry, "id">
| Omit <HealthCheckEntry, "id">;


export interface Patient {
    id: string;
    name: string;
    occupation: string;
    gender: Gender;
    ssn: string;
    dateOfBirth?: string;
    entries?: Entry[];
  }

export type PublicPatient = Omit<Patient, 'ssn'>;

export enum Gender {
  Male = 'male',
  Female = 'female',
  Others = 'others'
}