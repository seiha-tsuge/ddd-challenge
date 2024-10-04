import type { Email } from './e-mail/e-mail';
import type { EnrollmentStatus } from './enrollment-status/enrollment-status';
import type { JoinDate } from './join-date/join-date';
import type { MemberId } from './member-id/member-id';
import type { Name } from './name/name';

export class Member {
  constructor(
    private readonly _memberId: MemberId,
    private readonly _name: Name,
    private readonly _email: Email,
    private readonly _enrollmentStatus: EnrollmentStatus,
    private readonly _joinDate: JoinDate,
  ) {}

  static create(memberId: MemberId, name: Name, email: Email, enrollmentStatus: EnrollmentStatus, joinDate: JoinDate) {
    return new Member(memberId, name, email, enrollmentStatus, joinDate);
  }

  static reconstruct(
    memberId: MemberId,
    name: Name,
    email: Email,
    enrollmentStatus: EnrollmentStatus,
    joinDate: JoinDate,
  ) {
    return new Member(memberId, name, email, enrollmentStatus, joinDate);
  }

  get memberId(): MemberId {
    return this._memberId;
  }

  get name(): Name {
    return this._name;
  }

  get email(): Email {
    return this._email;
  }

  get enrollmentStatus(): EnrollmentStatus {
    return this._enrollmentStatus;
  }

  get joinDate(): JoinDate {
    return this._joinDate;
  }
}
