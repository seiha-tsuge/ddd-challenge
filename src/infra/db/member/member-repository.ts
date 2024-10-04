import { Email, EnrollmentStatus, JoinDate, Member, MemberId, Name } from '@/domain/models/member';
import type { EnrollmentStatusValue } from '@/domain/models/member';
import type { IMemberRepository } from '@/domain/models/member/member-repository';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class MemberRepository implements IMemberRepository {
  async save(member: Member) {
    await prisma.member.create({
      data: {
        member_id: member.memberId.value,
        name: member.name.value,
        email: member.email.value,
        enrollment_status: member.enrollmentStatus.value,
        join_date: member.joinDate.value,
      },
    });
  }

  async update(member: Member) {
    await prisma.member.update({
      where: {
        member_id: member.memberId.value,
      },
      data: {
        name: member.name.value,
        email: member.email.value,
        enrollment_status: member.enrollmentStatus.value,
        join_date: member.joinDate.value,
      },
    });
  }

  async delete(memberId: MemberId) {
    await prisma.member.delete({
      where: {
        member_id: memberId.value,
      },
    });
  }

  async find(memberId: MemberId): Promise<Member | null> {
    const data = await prisma.member.findUnique({
      where: {
        member_id: memberId.value,
      },
    });

    if (!data) {
      return null;
    }

    return Member.reconstruct(
      new MemberId(data.member_id),
      new Name(data.name),
      new Email(data.email),
      new EnrollmentStatus(data.enrollment_status as EnrollmentStatusValue),
      new JoinDate(data.join_date),
    );
  }
}
