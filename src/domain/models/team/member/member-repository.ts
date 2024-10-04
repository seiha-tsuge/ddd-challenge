import type { Member } from './member';
import type { MemberId } from './member-id/member-id';

export interface IMemberRepository {
  save(member: Member): Promise<void>;
  update(member: Member): Promise<void>;
  delete(memberId: MemberId): Promise<void>;
  find(memberId: MemberId): Promise<Member | null>;
}
