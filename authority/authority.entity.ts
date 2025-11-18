import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Authority
{
    @PrimaryGeneratedColumn()
    id: number;  // Auto ID

    @Column({ length: 150 })
    uniqueId: string;   // UUID

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    joiningDate: Date;

    @Column({ length: 30, default: 'Unknown' })
    country: string;
}
